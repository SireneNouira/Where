export default function disappear(items) {
    if(items.length > 1) {
        items.forEach(item => {
            item.style.display = "none";
        });
    }else{
        items.style.display = "none";
    }
};