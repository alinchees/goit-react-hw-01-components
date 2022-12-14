import css from './Statistics.module.css';
import PropTypes from 'prop-types';
const Statistics =({title,rgb,stats})=>{
const listItems = stats.map((stats,i)=>
    <li className={css.item} key={stats.id} style={{backgroundColor: rgb[i] }} >
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage} %</span>
    </li>
    );
return(
    <section className={css.statistics}>
    {title?<h2 className={css.title}>{title}</h2>:null}
  <ul className={css.statList}>
    {listItems}
  </ul>
</section>
);
}
Statistics.propTypes={
title:PropTypes.string,
rgb: PropTypes.arrayOf(PropTypes.string.isRequired),
stats: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
)

}
export default Statistics;