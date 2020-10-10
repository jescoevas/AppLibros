let methods = {}

methods.toArray = (col) => col == undefined ? [] : col

methods.removeHtml = (value) => {
    try{
        value = value.replace(/&(lt|gt);/g,
        function (p1) {
            return (p1 == "lt") ? "<" : ">";
        });
        var noHtml = value.replace(/<\/?[^>]+(>|$)/g, "");
        return noHtml
    }catch{
        return value
    }
}

export default methods