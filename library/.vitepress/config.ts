import { DefaultTheme, defineConfig } from 'vitepress'
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DOCS_ROOT = path.resolve(__dirname, "..");

function titleFromMarkdown(file: string): string {
    const source = fs.readFileSync(file, "utf8");

    // Remove frontmatter first.
    const { content } = matter(source);

    const match = content.match(/^#\s+(.+)$/m);

    if (match) {
        return match[1].trim();
    }

    // Fallback to filename.
    return path.basename(file, ".md");
}

function scanDirectory(
    absoluteDir: string,
    route: string,
): DefaultTheme.SidebarItem[] {
    const entries = fs
        .readdirSync(absoluteDir, { withFileTypes: true })
        .sort((a, b) => {
            if (a.isDirectory() !== b.isDirectory()) {
                return a.isDirectory() ? -1 : 1;
            }

            return a.name.localeCompare(b.name);
        });

    const items: DefaultTheme.SidebarItem[] = [];

    for (const entry of entries) {
        const absolute = path.join(absoluteDir, entry.name);

        if (entry.isDirectory()) {
            const index = path.join(absolute, "index.md");

            const children = scanDirectory(
                absolute,
                `${route}/${entry.name}`,
            );

            items.push({
                text: fs.existsSync(index)
                    ? titleFromMarkdown(index)
                    : entry.name,
                link: fs.existsSync(index)
                    ? `${route}/${entry.name}/`
                    : undefined,
                collapsed: false,
                items: children,
            });

            continue;
        }

        if (!entry.name.endsWith(".md")) {
            continue;
        }

        // index.md represents the section itself.
        if (entry.name === "index.md") {
            continue;
        }

        const slug = entry.name.slice(0, -3);

        items.push({
            text: titleFromMarkdown(absolute),
            link: `${route}/${slug}`,
        });
    }

    return items;
}

export function generateSidebar(
    docsSubdirectory = "content",
): DefaultTheme.SidebarItem[] {
    const root = path.join(DOCS_ROOT, docsSubdirectory);

    return scanDirectory(root, `/${docsSubdirectory}`);
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ajtf-resources/",
  title: "TAW-RL",
  description: "The 900th Tactical Air Wing Resources Library.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Training', link: '/content/training/' },
      { text: 'Regulations', link: '/content/regulations/' },
      { text: 'Modules', link: '/content/modules/' }
    ],

    sidebar: generateSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
