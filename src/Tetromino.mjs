import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  static T_SHAPE = RotatingShape.fromString(
    `.T.
     TTT
     ...`,
     0,
     4
  );

  static I_SHAPE = RotatingShape.fromString(
    `.....
     .....
     IIII.
     .....
     .....`,
     0,
     2
  );
}