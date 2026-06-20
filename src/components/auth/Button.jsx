export default function Button(props) {
    const order = {
        "1": "order-1",
        "none": "order-none"
    };




    
    return (
        <button 
            type="submit" 
            style={{ backgroundColor: props.color }}
            className="flex items-center justify-center gap-2 p-3.5 rounded-[12px]"
        >
            <img 
                src={props.src} 
                className={order[props.order]}
                alt={props.action}
            />
            <span className="text-white text-[16px]">{props.action}</span>
        </button>
    );
}