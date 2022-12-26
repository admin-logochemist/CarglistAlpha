import styles from '../../styles/DashboardHome.module.css';
import Chart from '../../components/component/Chart/Chart';
import FeaturedInfo from '../../components/component/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../components/component/WidgetLg/WidgetLg';
import WidgetSm from '../../components/component/WidgetSm/WidgetSm';
import { userData } from '../../components/component/DummyData'

function Home() {


  return (
    <>
      <div className="container" id={styles.home}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <FeaturedInfo />
          </div>
        </div>
        <div className="row" id={styles.Chart}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            {/*<Chart data={userData} title="User Analytics" grid dataKey="Active User"  />*/}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" id={`${styles.homeWidgets}`}>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
