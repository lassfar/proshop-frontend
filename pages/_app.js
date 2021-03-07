import App from 'next/app'
import { Provider } from 'react-redux'
// import withRedux from 'next-redux-wrapper'
import store from 'store'
import 'styles/globals.css'
import 'styles/bootstrap.min.css'

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx): {};

    console.log("appProps", appProps);

    return { appProps: appProps }
  }

  render() {
    const { Component, appProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...appProps} />
      </Provider>
    ) // return
  } // render
} // MyApp

// const makeStore = () => store
// export default (makeStore)(MyApp)

export default MyApp
