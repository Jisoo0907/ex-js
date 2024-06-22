function getNode(node, context = document) {
  if (typeof context === "string") {
    context = document.querySelector(context);
  }

  if (context.nodeType !== 9) context = document.querySelector(context);
  return context.querySelector(node);
}

function getNodes(node, context = document) {
  if (typeof context === "string") {
    context = document.querySelectorAll(context);
  }

  if (context.nodeType !== 9) context = document.querySelectorAll(context);
  return context.querySelectorAll(node);
}
