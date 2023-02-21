import { createCanvas, registerFont } from 'canvas';
import path from 'path';
import { projectPaths } from '../config/config';

registerFont(path.join(projectPaths.sources, 'assets/minecraft.ttf'), {
  family: 'minecraft',
});

export const scoreboardToImage = (
  scoreboardName: string,
  scoreboardData: [string, number][],
) => {
  const enum ScoreboardConstants {
    gray = '#BFBFBF',
    red = '#FF5555',
    white = '#FFFFFF',
    width = 250,
    spacing = 20,
  }

  const canvas = createCanvas(250, 0);
  const ctx = canvas.getContext('2d');

  const height = scoreboardData.length * ScoreboardConstants.spacing + 55;
  canvas.height = height;

  ctx.fillStyle = '#2c2f33';
  ctx.fillRect(0, 0, ScoreboardConstants.width, height);

  ctx.font = '20px minecraft';

  const titleSize = ctx.measureText(scoreboardName);

  let scoreboardTitle = scoreboardName;

  if (titleSize.width > ScoreboardConstants.width - 10) {
    let title = scoreboardName;
    let width = titleSize.width;

    while (width > ScoreboardConstants.width - 30) {
      title = title.slice(0, -1);
      width = ctx.measureText(title).width;
    }
    scoreboardTitle = `${title}...`;
  }

  const titlePos = [
    Math.floor(
      (ScoreboardConstants.width - ctx.measureText(scoreboardTitle).width) / 2,
    ),
    20,
  ];
  const playerAndScorePos: [number, number] = [2, 50];

  if (!titlePos[0] || !titlePos[1]) {
    throw new Error('Failed to get title position.');
  }

  // Write title
  ctx.fillStyle = ScoreboardConstants.white;
  ctx.fillText(scoreboardTitle, titlePos[0], titlePos[1], 240);

  let counter = 0;
  let total = 0;
  scoreboardData.forEach((i) => {
    // Write the player name
    ctx.fillStyle = ScoreboardConstants.gray;
    ctx.fillText(
      i[0],
      playerAndScorePos[0],
      playerAndScorePos[1] + counter * ScoreboardConstants.spacing,
    );

    // Write the score
    ctx.fillStyle = ScoreboardConstants.red;
    ctx.fillText(
      i[1].toString(),
      ScoreboardConstants.width - ctx.measureText(i[1].toString()).width,
      playerAndScorePos[1] + counter * ScoreboardConstants.spacing,
    );

    counter += 1;
    total += i[1];
  });

  // Write the total score (in red)
  ctx.fillText(
    String(total),
    ScoreboardConstants.width - ctx.measureText(String(total)).width,
    playerAndScorePos[1] + counter * ScoreboardConstants.spacing,
  );

  // Write 'Total' text
  ctx.fillStyle = ScoreboardConstants.white;
  ctx.fillText(
    'Total',
    playerAndScorePos[0],
    playerAndScorePos[1] + counter * ScoreboardConstants.spacing,
  );

  return canvas.toBuffer('image/png');
};
