self.addEventListener('message', (event) => {
  const { data } = event;
  // Realizar la tarea intensiva aquí
  const result = someIntensiveCalculation(data);
  self.postMessage(result);
});

// Para aligerar la carga de archivos
// import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

// A handler that resides in the worker thread
// const handler = new WebWorkerMLCEngineHandler();
// self.onmessage = (msg) => {
//     handler.onmessage(msg);
// };
// self.onmessageerror = (msg) => {
//     handler.onmessageerror(msg);
// };