/**
 * generateCard.js
 * ----------------
 * Renders the current fielding message as a beautiful image card
 * using the HTML Canvas API. Returns a Blob ready for sharing or downloading.
 */

/* ---------- constants ---------- */
const CARD_W = 1080;
const CARD_H = 1350;
const PADDING = 80;
const TEXT_AREA = CARD_W - PADDING * 2;

/* ---------- colors ---------- */
const BG_TOP = "#faf8f5";
const BG_BOTTOM = "#ede7db";
const TEXT_DARK = "#1a1a1a";
const TEXT_MID = "#6b6b6b";
const TEXT_LIGHT = "#b0a898";
const ACCENT = "#d4c8b8";

/* Curly quote characters for the card design */
const OPEN_QUOTE = "\u201C";
const CLOSE_QUOTE = "\u201D";

/**
 * Wraps a long string into lines that fit within a given pixel width.
 * Uses the canvas context's measureText for accurate measurement.
 */
function wrapText(ctx, text, maxWidth) {
  const lines = [];
  // Split by explicit newlines first
  const paragraphs = text.split("\n");

  for (const para of paragraphs) {
    const words = para.split(" ");
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const { width } = ctx.measureText(testLine);
      if (width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
  }
  return lines;
}

/**
 * Generates a shareable card image as a Blob.
 *
 * @param {string} quote  - The motivational quote
 * @param {string} action - The micro-action line
 * @returns {Promise<Blob>} PNG blob of the card
 */
export async function generateCardBlob(quote, action) {
  const canvas = document.createElement("canvas");
  canvas.width = CARD_W;
  canvas.height = CARD_H;
  const ctx = canvas.getContext("2d");

  /* -- background gradient -- */
  const grad = ctx.createLinearGradient(0, 0, 0, CARD_H);
  grad.addColorStop(0, BG_TOP);
  grad.addColorStop(1, BG_BOTTOM);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  /* -- decorative thin line at top -- */
  ctx.strokeStyle = ACCENT;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(PADDING, 100);
  ctx.lineTo(CARD_W - PADDING, 100);
  ctx.stroke();

  /* -- emoji -- */
  ctx.font = "80px serif";
  ctx.textAlign = "center";
  ctx.fillText("🤗", CARD_W / 2, 200);

  /* -- quote -- */
  ctx.font = '600 56px "Dancing Script", cursive';
  ctx.fillStyle = TEXT_DARK;
  ctx.textAlign = "center";

  // Opening quote mark
  ctx.font = '600 48px "Inter", serif';
  ctx.fillStyle = ACCENT;
  ctx.fillText(OPEN_QUOTE, CARD_W / 2 - TEXT_AREA / 2 + 20, 300);

  // Quote body
  ctx.font = '600 56px "Dancing Script", cursive';
  ctx.fillStyle = TEXT_DARK;
  const quoteLines = wrapText(ctx, quote, TEXT_AREA - 40);
  let y = 370;
  const lineHeight = 72;
  for (const line of quoteLines) {
    ctx.fillText(line, CARD_W / 2, y);
    y += lineHeight;
  }

  // Closing quote mark
  ctx.font = '600 48px "Inter", serif';
  ctx.fillStyle = ACCENT;
  ctx.fillText(CLOSE_QUOTE, CARD_W / 2 + TEXT_AREA / 2 - 20, y - 10);

  /* -- decorative separator -- */
  y += 30;
  ctx.strokeStyle = ACCENT;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(CARD_W / 2 - 40, y);
  ctx.lineTo(CARD_W / 2 + 40, y);
  ctx.stroke();

  /* -- action line -- */
  y += 50;
  ctx.font = '400 28px "Outfit", sans-serif';
  ctx.fillStyle = TEXT_MID;
  ctx.textAlign = "center";
  const actionText = `🎯 Today's action: ${action}`;
  const actionLines = wrapText(ctx, actionText, TEXT_AREA - 60);
  for (const line of actionLines) {
    ctx.fillText(line, CARD_W / 2, y);
    y += 42;
  }

  /* -- branding footer -- */
  ctx.strokeStyle = ACCENT;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(PADDING, CARD_H - 120);
  ctx.lineTo(CARD_W - PADDING, CARD_H - 120);
  ctx.stroke();

  ctx.font = '500 24px "Outfit", sans-serif';
  ctx.fillStyle = TEXT_LIGHT;
  ctx.textAlign = "center";
  ctx.fillText("Set My Fielding", CARD_W / 2, CARD_H - 78);

  ctx.font = '400 20px "Outfit", sans-serif';
  ctx.fillText("crafted by kapil", CARD_W / 2, CARD_H - 48);

  /* -- convert to blob -- */
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png");
  });
}

/**
 * Shares or downloads the generated card image.
 * Uses the Web Share API on supported devices, falls back to download.
 *
 * @param {string} quote  - The motivational quote
 * @param {string} action - The micro-action line
 */
export async function shareCard(quote, action) {
  const blob = await generateCardBlob(quote, action);
  const file = new File([blob], "set-my-fielding.png", { type: "image/png" });

  // Try native share (mostly mobile)
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: "Set My Fielding",
        text: `"${quote}"\n\n🎯 ${action}\n\n— Set My Fielding by @kapil.dadhich`,
        files: [file],
      });
      return;
    } catch (err) {
      // User cancelled or share failed — fall through to download
      if (err.name === "AbortError") return;
    }
  }

  // Fallback: download the image
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "set-my-fielding.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
