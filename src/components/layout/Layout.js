import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout ({children}) {
    return (
        <div className="Layout">
              <MainNavigation/>
              <main className={classes.main}>
                 {children}
              </main>
        </div>
    );
};

export default Layout;