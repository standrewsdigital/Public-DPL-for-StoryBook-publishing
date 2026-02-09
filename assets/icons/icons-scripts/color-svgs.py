from pathlib import Path

# 1) Use the already-processed icons (with var(--icon-bg) etc.)
SRC_DIR = Path("../icons-themable")
DEST_DIR = Path("../icons-colored")           # final concrete-colour SVGs

DEST_DIR.mkdir(parents=True, exist_ok=True)

# 2) Brand themes
THEMES = {
    "burgundy": {
        "bg": "#f2c3d2",
        "line": "#c60c46",
        "accent": "#d44974",
    },
    "green": {
        "bg": "#C0E1CF",
        "line": "#00853f",
        "accent": "#40a46f",
    },
    "purple": {
        "bg": "#DED0E7",
        "line": "#7b439a",
        "accent": "#9c72b3",
    },
}

# 3) Icons where ONLY the background should change
BACKGROUND_ONLY = {
    "crest",
    "saints-sport",
    "your-union",
}

for svg_path in SRC_DIR.glob("*.svg"):
    stem = svg_path.stem  # e.g. "crest-book"
    original_text = svg_path.read_text(encoding="utf-8")

    for theme_name, colors in THEMES.items():
        text = original_text

        # Always recolour background
        text = text.replace("var(--icon-bg)", colors["bg"])

        # Only recolour line + accent if this icon is NOT background-only
        if stem not in BACKGROUND_ONLY:
            text = text.replace("var(--icon-line)", colors["line"])
            text = text.replace("var(--icon-accent)", colors["accent"])

        out_path = DEST_DIR / f"{stem}-{theme_name}.svg"
        out_path.write_text(text, encoding="utf-8")
        print(f"Generated: {out_path}")
