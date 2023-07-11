import styles from "./Avatar.module.css"

export function Avatar(props){
    const hasBorder = props.hasBorder !== false;
    return(
        <img 
        className={hasBorder ? styles.AvatarWithBorder : styles.Avatar}
        src= {props.src}
    />
    );
}