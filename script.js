gsap.registerPlugin(MorphSVGPlugin);
gsap.timeline().from("#reindeer", { duration: 4, opacity: 0 });

var tl = gsap.timeline({ repeat: -1 });
tl.addLabel("positionOne")
  //LEFT ARM
  .to("#left-arm-pos1", {
    duration: 0.6,
    ease: "none",
    morphSVG: {
      shape: "#left-arm-pos2",
      type: "rotational",
      origin: "70% 5%"
    }
  })
  .addLabel("positionTwo")
  .to("#left-arm-pos1", {
    duration: 0.75,
    opacity: 100,
    fill: "none",
    ease: "none",
    morphSVG: {
      shape: "#left-arm-pos3",
      type: "rotational",
      origin: "25% 5%",
      map: "position",
      shapeIndex: 4
    }
  })
  .addLabel("positionThree")
  .to("#left-arm-pos1", {
    duration: 0.6,
    opacity: 100,
    fill: "none",
    ease: "none",
    morphSVG: {
      shape: "#left-arm-pos2",
      type: "rotational",
      origin: "25% 5%",
      map: "position",
      shapeIndex: 4
    }
  })
  .addLabel("positionFour")
  .to("#left-arm-pos1", {
    duration: 0.75,
    ease: "none",
    opacity: 100,
    morphSVG: {
      shape: "#left-arm-pos1",
      type: "rotational",
      origin: "70% 5%"
    }
  })
  //RIGHT ARM
  .to(
    "#right-arm-pos1",
    {
      duration: 0.6,
      ease: "none",
      morphSVG: {
        shape: "#right-arm-pos2",
        type: "rotational",
        origin: "70% 5%"
      }
    },
    "positionOne"
  )
  .to(
    "#right-arm-pos1",
    {
      duration: 0.75,
      opacity: 100,
      fill: "none",
      ease: "none",
      morphSVG: {
        shape: "#right-arm-pos3",
        type: "rotational",
        origin: "25% 5%",
        map: "position",
        shapeIndex: 4
      }
    },
    "positionTwo"
  )
  .to(
    "#right-arm-pos1",
    {
      duration: 0.6,
      ease: "none",
      morphSVG: {
        shape: "#right-arm-pos2",
        type: "rotational",
        origin: "70% 5%"
      }
    },
    "positionThree"
  )
  .to(
    "#right-arm-pos1",
    {
      duration: 0.75,
      opacity: 100,
      fill: "none",
      ease: "none",
      morphSVG: {
        shape: "#right-arm-pos1",
        type: "rotational",
        origin: "25% 5%",
        map: "position",
        shapeIndex: 4
      }
    },
    "positionFour"
  )

  //LEFT LEG
  .to(
    "#left-leg-pos1",
    {
      duration: 0.6,
      ease: "none",
      morphSVG: {
        shape: "#left-leg-pos2",
        type: "rotational",
        origin: "25% 5%"
      }
    },
    "positionOne"
  )
  .to(
    "#left-leg-pos1",
    {
      duration: 0.75,
      opacity: 100,
      fill: "none",
      ease: "none",
      morphSVG: {
        shape: "#left-leg-pos3",
        type: "rotational",
        origin: "70% 5%",
        map: "position",
        shapeIndex: 4
      }
    },
    "positionTwo"
  )
  .to(
    "#left-leg-pos1",
    {
      duration: 0.6,
      ease: "none",
      morphSVG: {
        shape: "#left-leg-pos2",
        type: "rotational",
        origin: "70% 5%"
      }
    },
    "positionThree"
  )
  .to(
    "#left-leg-pos1",
    {
      duration: 0.75,
      opacity: 100,
      fill: "none",
      ease: "none",
      morphSVG: {
        shape: "#left-leg-pos1",
        type: "rotational",
        origin: "25% 5%",
        map: "position",
        shapeIndex: 4
      }
    },
    "positionFour"
  )

  //RIGHT LEG
  .to(
    "#right-leg-pos1",
    {
      duration: 0.6,
      ease: "none",
      morphSVG: {
        shape: "#right-leg-pos2",
        type: "rotational",
        origin: "70% -10%"
      }
    },
    "positionOne"
  )
  .to(
    "#right-leg-pos1",
    {
      duration: 0.75,
      opacity: 100,
      fill: "none",
      ease: "none",
      morphSVG: {
        shape: "#right-leg-pos3",
        type: "rotational",
        origin: "25% -10%",
        map: "position",
        shapeIndex: 4
      }
    },
    "positionTwo"
  )
  .to(
    "#right-leg-pos1",
    {
      duration: 0.6,
      ease: "none",
      morphSVG: {
        shape: "#right-leg-pos2",
        type: "rotational",
        origin: "25% -10%"
      }
    },
    "positionThree"
  )
  .to(
    "#right-leg-pos1",
    {
      duration: 0.75,
      opacity: 100,
      fill: "none",
      ease: "none",
      morphSVG: {
        shape: "#right-leg-pos1",
        type: "rotational",
        origin: "70% -10%",
        map: "position",
        shapeIndex: 4
      }
    },
    "positionFour"
  );

//NOISE
var clickNose;
var honk = document.createElement("audio");

honk.preload = "auto";
honk.type = "audio/wav";
honk.loop = false;
honk.src =
  "https://www.dropbox.com/s/v3nih2rytlxln8w/horn_stickinthemud.wav?dl=1";

nosey.onclick = function () {
  honk.play();
};

//WINKING ON NOSE HOVER
$(function () {
  $("#nosey").hover(
    function () {
      $("#right-eye").css({ opacity: 0 });
      $("#right-wink-eye").css("stroke-opacity", "1");
    },
    function () {
      // on mouseout wait a while then unwink
      setTimeout(function () {
        $("#right-eye").css({ opacity: 1 });
        $("#right-wink-eye").css("stroke-opacity", "0");
      }, 300);
    }
  );
});

//places the svg in the right place and adds the class of reindeer so it doesn't change every time I reimport the svg code???
var shape = document.getElementsByTagName("svg")[0];
//shape.setAttribute("viewBox", "-400 -200 4000 3200");
//shape.setAttribute("id", "reindeer");
shape.style.display = "block";
