<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stop Watch</title>
    <!-- import css file -->
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- main container -->
    <div id="container">
      <!-- Time container -->
      <!-- hr, min, sec, msec -->
      <div id="time">
        <span class="digit" id="hr">00</span>
        <!-- colon only display in small devices -->
        <span class="colon">:</span>
        <span class="text">Hr</span>

        <span class="digit" id="min">00</span>

        <!-- colon only display in small devices -->
        <span class="colon">:</span>
        <span class="text">Min</span>

        <span class="digit" id="sec">00</span>
        <span class="text">Sec</span>

        <span class="digit" id="msec">00</span>
      </div>

      <!-- btns-container -->
      <div id="btns-container">
        <!-- Start button -->
        <button id="start" class="buttons" onclick="start()">START</button>
        <!-- Reset button -->
        <button id="reset" class="buttons" onclick="reset()">RESET</button>
        <!-- Stop btn -->
        <button id="stop" class="buttons" onclick="stop()">STOP</button>
      </div>
    </div>

    <!-- import javaScript file -->
    <script src="./index.js"></script>
  </body>
</html>
