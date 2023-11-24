import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .put('', this.updateUserAccount)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async updateUserAccount(req, res, next) {
    try {
      const userInfo = req.userInfo
      const accountData = req.body
      const account = await accountService.updateAccount(userInfo, accountData)
      return res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
