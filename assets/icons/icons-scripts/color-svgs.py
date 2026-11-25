from pathlib import Path

# 1) Use the already-processed icons (with var(--icon-bg), etc.)
SRC_DIR = Path("../icons-themable")

# Final concrete-colour SVGs
DEST_DIR = Path("../icons-colored")
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
        "accent": "#26985c",  # green-15-tint
    },
    "purple": {
        "bg": "#d7c7e1",      # purple-70-tint
        "line": "#7b439a",    # purple-primary
        "accent": "#8f5fa9",  # purple-15-tint
    },
    "dark-blue": {
        "bg": "#80809b",      # dark-blue-50-tint
        "line": "#000036",    # dark-blue-primary
        "accent": "#404068",  # dark-blue-25-tint
    },
    "dark-green": {
        "bg": "#80a9a6",      # dark-green-50-tint
        "line": "#01524c",    # dark-green-primary
        "accent": "#417d79",  # dark-green-25-tint
    },
}

# 3) Icons where only the background should change
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

        # Always recolour the background
        text = text.replace("var(--icon-bg)", colors["bg"])

        # Only recolour line and accent when the icon is not background-only
        if stem not in BACKGROUND_ONLY:
            text = text.replace("var(--icon-line)", colors["line"])
            text = text.replace("var(--icon-accent)", colors["accent"])

        out_path = DEST_DIR / f"{stem}-{theme_name}.svg"
        out_path.write_text(text, encoding="utf-8")

        print(f"Generated: {out_path}")