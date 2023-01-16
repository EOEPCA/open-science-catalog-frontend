export default (_, inject) => {
  inject("typeColor", (type) => {
    switch (type) {
      case "theme": {
        return "grey";
      }
      case "project": {
        return "primary";
      }
      case "variable": {
        return "green";
      }
      case "product": {
        return "blue";
      }
    }
  });
};
