# CSS transitions
```css
transition: transform 0.5s ease-out 1s;
```
- `transform` part means property
- `0.5s` part means duration
- `ease-out` part means timing function
- `1s` part means delay

```css
  .card-container {
    transition: transform 2s ease-out 1s;
  }

  .card-container:hover {
    transform: scale(1.05);
  }
```