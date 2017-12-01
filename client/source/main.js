import 'babylon';

var universe;

var socket = io('http://localhost:3000');
socket.on('connect', ()=>{
  socket.on('pushUni', (data)=>{
    console.log('data received');
    universe = data;
    dataReady(universe);
  });
})

function dataReady (data) {
  // Get the canvas element from our HTML below
  var canvas = document.getElementById("renderCanvas");
  // Load the BABYLON 3D engine
  var engine = new BABYLON.Engine(canvas, true);

  var createScene = function (data) {
     // make a baberlon
     var scene = new BABYLON.Scene(engine);
     // blackground engage
     scene.clearColor = new BABYLON.Color3(0, 0, 0);
     // This creates and positions a free camera
     var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(400, 5, 300), scene);
     // This targets the camera to scene origin
     camera.setTarget(BABYLON.Vector3.Zero());
     // This attaches the camera to the canvas
     camera.attachControl(canvas, false);
     // This creates a light, aiming 0,1,0 - to the sky.
     var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
     // Dim the light a small amount
     light.intensity = .5;

     for(var i = 0; i < data.stars.length; i++){
       // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
       var sphere = BABYLON.Mesh.CreateSphere(data.stars[i].name, 4, 0.2, scene);
       sphere.position.x = data.stars[i].x;
       sphere.position.z = data.stars[i].y;
       sphere.position.y = 0.1;
     }
     // Leave this function
     return scene;
  }; // End of createScene function
  // -------------------------------------------------------------
  // Now, call the createScene function that you just finished creating
  var scene = createScene(data);
  // Register a render loop to repeatedly render the scene
  engine.runRenderLoop(function () {
     scene.render();
  });
  // Watch for browser/canvas resize events
  window.addEventListener("resize", function () {
     engine.resize();
  });
};
