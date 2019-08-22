/*=================== INTERFACES ===============*/

interface ScreenProp {
  navigation: {
    goBack: () => void
    push: (routeName: string, params?: any) => void
    getParam: (paramName: string, defaultValue?: any) => any
    navigate: (routeName: string, params?: any) => void
    state: {
      routeName: string
      key: string
    }
  }
}
