import styles from './card.module.css';

let bannerClass:string = styles.card + " " + styles.shadow

export default () => {
    return (
        <div className={bannerClass}>
            <h1 className={styles.infoHeading}>Info 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestiae deleniti consequuntur corrupti. Excepturi tempora illo vero veritatis necessitatibus non omnis quia porro, nam laboriosam labore itaque, quasi reprehenderit soluta.</p>
        </div>
    )
}