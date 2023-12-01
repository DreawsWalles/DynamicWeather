import {ISelectProps} from "./ISelectProps";
import styles from "./Select.module.css";
import {useState} from "react";
export function Select(props : ISelectProps){
    const options = props.options;
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleSelect = (e : any) => {
        const value = e.target.value;
        setSelectedOption(value);
        const key = e.target.options[e.target.selectedIndex].getAttribute('data-key');
        props.onSelect(key);
    };

    return(
        <div className={styles.selectWrapper}>
            <select className={styles.select} value={selectedOption} onChange={handleSelect}>
                {options.map((option, index) => (
                    <option key={index} value={option.name} data-key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
            <div className={styles.selectArrow}></div>
        </div>
    )
}