import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'New Syntax',
    Svg: require('@site/static/img/one.svg').default,
    description: (
      <>
        Pluto implements various popular syntaxes that are absent in Lua, such as switch statements, compound operators, ternary expressions, etc.
      </>
    ),
  },
  {
    title: 'Compatibility',
    Svg: require('@site/static/img/one.svg').default,
    description: (
      <>
        Pluto is remarkably compatible with Lua's source & bytecode. The only conflict is how our new keywords may conflict with identifiers, however we offer "Compatibility Mode" to resolve this issue.
      </>
    ),
  },
  {
    title: 'Larger Standard Library',
    Svg: require('@site/static/img/one.svg').default,
    description: (
      <>
        Dozens of new string functions, table functions, portable filesystem functions, assertion libraries for unit testing, hashing algorithms, JSON, Base64, URL encoding, Vector3, and more.
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
