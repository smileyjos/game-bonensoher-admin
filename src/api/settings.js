import request from '@/utils/request'

class SettingsApi {
  getSettings(){
    return request({
      url: '/load-settings',
      method: 'get'
    })
  }

  updateSettings(settings){
    return request({
      url: '/update-settings',
      method: 'post',
      data: {
        settings: settings,
        timestamp: new Date().getTime()
      }
    })
  }
}

const Settings = new SettingsApi()
export { Settings as default }
