import style from './Allowance.module.css'

const Allowance: React.FC = () => {
    return (
        <div className={style.allowance_container}>
            <div className={style.allowance_container_left}>
                <h4>Gold Deposits - Events Exploration Page</h4>
                <p>Explore, Map, Analyse, Mine &amp; Extract. For best results, Choose events from your category and focus!</p>
            </div>

            <div className={style.allowance_container_right}>
                {/* <img src={Allowance_img} alt="" /> */}
            </div>
        </div>
    )
}

export default Allowance