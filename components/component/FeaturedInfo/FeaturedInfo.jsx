import styles from '../../../styles/FeaturedInfo.module.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

function FeaturedInfo() {
    return (
        <div className={`${styles.Featured}`}>

            <div className={styles.FeaturedItem}>
                <span className={styles.FeaturedTitle}>Revenue</span>
                <div className={styles.FeaturedMoneyConatiner}>
                    <span className={styles.FeaturedMoney}>$2,451</span>
                    <span className={styles.FeaturedMoneyRate}>-11.4 <ArrowDownward className={`${styles.FeaturedIcon} ${styles.negative}`} /></span>
                </div>
                <span className={styles.FeaturedSub}>Compared to last month</span>
            </div>
            <div className={styles.FeaturedItem}>
                <span className={styles.FeaturedTitle}>Sales</span>
                <div className={styles.FeaturedMoneyConatiner}>
                    <span className={styles.FeaturedMoney}>$4,451</span>
                    <span className={styles.FeaturedMoneyRate}>-11.4 <ArrowDownward className={`${styles.FeaturedIcon} ${styles.negative}`} /></span>
                </div>
                <span className={styles.FeaturedSub}>Compared to last month</span>
            </div>
            <div className={styles.FeaturedItem}>
                <span className={styles.FeaturedTitle}>Cost</span>
                <div className={styles.FeaturedMoneyConatiner}>
                    <span className={styles.FeaturedMoney}>$2,251</span>
                    <span className={styles.FeaturedMoneyRate}>+5.4 <ArrowUpward className={`${styles.FeaturedIcon}`} /></span>
                </div>
                <span className={styles.FeaturedSub}>Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo;
