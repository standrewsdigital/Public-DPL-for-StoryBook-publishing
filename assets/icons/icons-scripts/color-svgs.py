from pathlib import Path

# 1) Use the already-processed icons (with var(--icon-bg) etc.)
SRC_DIR = Path("../icons-themable")
DEST_DIR = Path("../icons-colored")           # final concrete-colour SVGs

DEST_DIR.mkdir(parents=True, exist_ok=True)

# 2) Brand themes
THEMES = {
    "burgundy": {
        "bg": "#eeb6c8",      # burgundy-70-tint
        "line": "#c60c46",    # burgundy-primary
        "accent": "#d44974",  # burgundy-25-tint
    },
    "green": {
        "bg": "#b3dac5",      # green-70-tint
        "line": "#00853f",    # green-primary
        "accent": "#26985c",  # green-15-tint (darker for contrast)
    },
    "purple": {
        "bg": "#d7c7e1",      # purple-70-tint
        "line": "#7b439a",    # purple-primary
        "accent": "#8f5fa9",  # purple-15-tint (darker for contrast)
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
