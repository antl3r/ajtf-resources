---
order: 1
---

# Military Grid Reference System (MGRS)

MGRS is a standardized way to describe locations on a map.

Instead of saying:

> "The building near the road."

You can say:

```
51M CV 1234 5678
```

Anyone looking at the same map can locate that exact position.

---

## An MGRS Coordinate

A complete coordinate looks like:

```
51M CV 1234 5678
```

It has four parts.

| Part | Example | Purpose |
|-------|---------|----------|
| Grid Zone | 51M | Large map area |
| 100 km Square | CV | Identifies a large square |
| Easting | 1234 | How far east |
| Northing | 5678 | How far north |

For most in-game communications, everyone is already operating on the same map.

That means the first two parts usually **do not need to be spoken** unless there is a chance of confusion.

Instead:

```
1234 5678
```

is often enough.

Always follow your mission SOP.

---

## Accuracy

More digits means greater precision.

| Coordinate | Accuracy |
|------------|-----------|
| 12 56 | 1 km |
| 123 567 | 100 m |
| 1234 5678 | 10 m |
| 12345 56789 | 1 m |

For infantry operations:

**8-digit coordinates** are usually the best balance between speed and accuracy.

```
1234 5678
```