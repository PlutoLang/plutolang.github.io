import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'New Syntax',
    Svg: require('@site/static/img/one.svg').default,
    description: (
      <>
        Pluto implements various popular syntaxes that are absent in Lua.
      </>
    ),
  },
  {
    title: 'Optimizations',
    Svg: require('@site/static/img/one.svg').default,
    description: (
      <>
        Pluto is slightly faster than Lua, but in some instances by a pretty large margin.
      </>
    ),
  },
  {
    title: 'Larger Standard Library',
    Svg: require('@site/static/img/one.svg').default,
    description: (
      <>
        Pluto aims to meet the standard library of Python, and is slowly encroaching this goal.
      </>
    )
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
