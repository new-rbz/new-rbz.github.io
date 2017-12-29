var GraphManager = function(source) {
  google.load("visualization", "1", { packages: ["annotatedtimeline"] });
  google.setOnLoadCallback(drawChart);

  function drawChart() {
    var query = new google.visualization.Query(source);
    query.send(handleQueryResponse);
  }

  function handleQueryResponse(response) {
    if (response.isError()) {
      alert(
        "Error in query: " +
          response.getMessage() +
          " " +
          response.getDetailedMessage()
      );
      return;
    }

    var data = response.getDataTable();
    var annotatedtimeline = new google.visualization.AnnotatedTimeLine(
      document.getElementById("chart")
    );
    annotatedtimeline.draw(data, { displayAnnotations: true });
  }

  return {
    drawChart: drawChart
  };
};
