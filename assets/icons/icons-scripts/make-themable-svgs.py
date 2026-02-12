from pathlib import Path
import re

SRC_DIR = Path("../")      # original SVGs
DEST_DIR = Path("../icons-themable")

DEST_DIR.mkdir(parents=True, exist_ok=True)

# All possible "background" light-blue colours from original icons
BACKGROUND_COLORS = {
    "#cceffc",
    "#CCEFFC",
}

# All possible "line" dark-blue colours from original icons
LINE_COLORS = {
    "#00539b",
    "#00539B",
    "#00529f",
    "#05539e"

}

# Accent blue used in crest-book, dragon-claw, dragon-head, etc.
ACCENT_COLORS = {
    "#33bef2",
    "#33BEF2",
    "#00aeef"
}

# Icons where we ONLY want to change the background colour,
# and keep ALL other fills as they are
BACKGROUND_ONLY = {
    "crest",
    "saints-sport",
    "your-union",
}

def replace_set(text: str, colors: set[str], replacement: str) -> str:
    if not colors:
        return text
    pattern = "|".join(re.escape(c) for c in colors)
    return re.sub(pattern, replacement, text)

for svg_path in SRC_DIR.glob("*.svg"):
    stem = svg_path.stem  # e.g. "crest-book"
    text = svg_path.read_text(encoding="utf-8")

    # 1) Always replace background colours → CSS variable
    text = replace_set(text, BACKGROUND_COLORS, "var(--icon-bg)")

    if stem not in BACKGROUND_ONLY:
        # 2) For "normal" icons: replace line + accent
        text = replace_set(text, LINE_COLORS, "var(--icon-line)")
        text = replace_set(text, ACCENT_COLORS, "var(--icon-accent)")
    else:
        # For crest / saints-sport / your-union: leave lines & accents alone
        print(f"[background only] Skipping line/accent replacement for: {stem}")

    out_path = DEST_DIR / svg_path.name
    out_path.write_text(text, encoding="utf-8")
    print(f"Processed {stem} → {out_path}")
