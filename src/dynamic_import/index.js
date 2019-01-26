import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ImportedComponent: null
    }
  }
  loadModule = () => {
    import('./other').then(module => {
      console.log(module)
      const ImportedComponent = module.default
      this.setState({
        ImportedComponent,
      })
    })
  }
  render() {
    const {ImportedComponent} = this.state
    return <div><button onClick={this.loadModule}>Click</button>
    {ImportedComponent && <ImportedComponent ></ImportedComponent>}</div>
  }
}