//react
import React from 'react'
import QueueAnim from 'rc-queue-anim'
import history from '../../router/history'
import config from '../../utils/config'
//redux
import { connect } from 'react-redux'
import { signIn, currentUser } from '../../actions/Auth'
//ant
import { Button, Icon, Form, Input, Layout } from 'antd'
//image
//import logo from '../../image/logo.png'
//css
import styles from './index.module.less'

const {
  Footer
} = Layout;

const FormItem = Form.Item

class Login extends React.Component {

  state = { loading: false }


  componentDidMount() {
    if (this.props.isSignedIn) {
      history.push('/')
    }
  }

  handleSubmit = (e) => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signIn(values)
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { isloaded } = this.props
    return (
      <React.Fragment>
        <div className={styles.form}>
          <QueueAnim delay={200} type="top">
            <div className={styles.logo} key="1">
              {/* <img alt="logo" src={logo} /> */}
            </div>
            <div className={styles.textdes} key="2">
              <span>Digital Village</span>
            </div>
          </QueueAnim>
          <br />
          <form layout="vertical" onSubmit={this.handleSubmit}>
            <QueueAnim delay={200} type="top">
              <FormItem key="1">
                {getFieldDecorator('user_name', {
                  rules: [
                   
                  ],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="User Name" />)}
              </FormItem>
              <FormItem key="2">
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Required password',
                    },
                  ],
                })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
              </FormItem>
              <FormItem key="3">
                <Button style={{ backgroundColor: "#1890ff", color: "white", borderRadius: "10px" }} htmlType="submit" size="default" loading={isloaded}>
                  SIGN IN
                  </Button>
              </FormItem>
            </QueueAnim>
          </form>
        </div>
        <div className={styles.footer}>
          <Footer style={{ textAlign: 'center', background: '#fff' }}>
            {config.footerText}
          </Footer>
        </div>
      </React.Fragment>
    )
  }
}
function mapStateToProps(state) {
  return {
    lang: state.locale.lang,
    isSignedIn: state.auth.isSignedIn,
    isloaded: state.loading.isloaded
  }
}
export default connect(mapStateToProps, { signIn, currentUser })(Form.create()(Login));




