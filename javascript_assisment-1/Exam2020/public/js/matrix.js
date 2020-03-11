function mapdata() {
  const size = 5;
  let nodes = [];
  let edges = [];

  // Write your logic here...

  const createNodes = (size) => {

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const nodeDataObj = {
          id: `N${i}-${j}`
        }

        let nodeObj = {
          data: nodeDataObj
        }

        nodes.push(nodeObj);
      }
    }

  }

  const createEdges = (size) => {


    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {

        if (j + 1 < size) {
          const edgeDataObj = {};
          edgeDataObj.id = `${i}-${j}E`
          edgeDataObj.source = `N${i}-${j}`
          edgeDataObj.target = `N${i}-${j+1}`
          let edgeObj = {
            data: edgeDataObj
          }
          edges.push(edgeObj);
        }

        if (j - 1 >= 0) {
          const edgeDataObj = {};
          edgeDataObj.id = `${i}-${j}W`
          edgeDataObj.source = `N${i}-${j}`
          edgeDataObj.target = `N${i}-${j-1}`
          let edgeObj = {
            data: edgeDataObj
          }
          edges.push(edgeObj);
        }

        if (i + 1 < size) {
          const edgeDataObj = {};
          edgeDataObj.id = `${i}-${j}S`
          edgeDataObj.source = `N${i}-${j}`
          edgeDataObj.target = `N${i+1}-${j}`
          let edgeObj = {
            data: edgeDataObj
          }
          edges.push(edgeObj);
        }

        if (i - 1 >= 0) {
          const edgeDataObj = {};
          edgeDataObj.id = `${i}-${j}N`
          edgeDataObj.source = `N${i}-${j}`
          edgeDataObj.target = `N${i-1}-${j}`
          let edgeObj = {
            data: edgeDataObj
          }
          edges.push(edgeObj);
        }

        if (i + 1 < size && j + 1 < size) {
          const edgeDataObj = {};
          edgeDataObj.id = `${i}-${j}ES`
          edgeDataObj.source = `N${i}-${j}`
          edgeDataObj.target = `N${i+1}-${j+1}`
          let edgeObj = {
            data: edgeDataObj
          }
          edges.push(edgeObj);
        }

        if (i + 1 < size && j - 1 >= 0) {
          const edgeDataObj = {};
          edgeDataObj.id = `${i}-${j}WS`
          edgeDataObj.source = `N${i}-${j}`
          edgeDataObj.target = `N${i+1}-${j-1}`
          let edgeObj = {
            data: edgeDataObj
          }
          edges.push(edgeObj);
        }

        if (i - 1 >= 0 && j + 1 < size) {
          const edgeDataObj = {};
          edgeDataObj.id = `${i}-${j}EN`
          edgeDataObj.source = `N${i}-${j}`
          edgeDataObj.target = `N${i-1}-${j+1}`
          let edgeObj = {
            data: edgeDataObj
          }
          edges.push(edgeObj);
        }

        if (i - 1 >= 0 && j - 1 >= 0) {
          const edgeDataObj = {};
          edgeDataObj.id = `${i}-${j}WN` 
          edgeDataObj.source = `N${i}-${j}`
          edgeDataObj.target = `N${i-1}-${j-1}`
          let edgeObj = {
            data: edgeDataObj
          }
          edges.push(edgeObj);
        }
      }
    }

  }

  createNodes(size);

  createEdges(size)

  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;