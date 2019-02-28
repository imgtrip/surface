import {scoreAndReviewPostLink} from '../service/link'

export const lang = {
  /*
   * ------------------------------
   *          system
   * ------------------------------
   */
  no_more_content: '暂无更多内容',
  no_content: '无内容',
  content_has_been_loaded: '内容加载完毕',
  agreement: '《用户协议》',
  register_and_login: '注册 & 登录',
  collect: '收藏',
  created_albums: '创建的图集',
  logout: '退出登录',
  load_more: '加载更多',
  submit: '提交',
  login: '登录',
  register: '注册',
  remember_me: '记住我',
  agree: '我已阅读并同意',
  set_cover: '设为封面',
  download: '下载',
  like: '喜欢',
  dislike: '不喜欢',
  remove: '删除',
  login_to_continue_view: '登录后继续旅图，可解锁点赞、收藏、下载无水印原图等更多功能。',
  revert: '撤销',

  /*
   * ------------------------------
   *      form validator
   * ------------------------------
   */
  nickname_cannot_be_empty: '昵称不能为空',
  email_format_illegal: '邮箱格式不正确',
  verification_code_illegal: '验证码错误',
  confirm_password_not_matched: '两次密码输入不一致',
  email_cannot_empty: '邮箱不能为空',
  email_or_password_error: '邮箱或密码错误',
  nickname_cannot_empty: '昵称不能为空',
  password_cannot_empty: '密码不能为空',
  password_cannot_less_than_six_chart: '密码不能小于6个字符',
  nickname_already_exist: '用户名已存在',
  email_already_exist: '邮箱已存在',
  email_maybe_incorrect: '邮箱可能有误',
  password_maybe_incorrect: '密码可能有误',
  album_name_cannot_be_empty: '图集名称不能为空',
  tag_name_cannot_be_empty: '标签名称不能为空',
  /*
   * ------------------------------
   *     form option
   * ------------------------------
   */
  nickname: '昵称',
  email: '邮箱',
  password: '密码',
  confirm_password: '确认密码',
  verification_code: '验证码',
  referer_email: '推荐者邮箱',
  retrieve_password: '找回密码',
  optional: '选填',

  will_remove_tag_soon: '即将删除该标签',
  request_success_waiting_review: '操作成功，将于社区投票审核后显示',
  score_too_lower: '积分不足',
  operator_fail: '操作失败',
  operator_success: '操作成功',

  review: {
    agree: '同意',
    disagree: '反对',
  },
  reviews_page_description: `这里会显示你有权审核的待审核事项，你可以发表意见<b>同意</b>或<b>反对</b>。审核结束后系统会对票数更多的一方发放相应积分，如果结果为通过，则发起者也会获得对应积分。具体可以参见 <a href="${scoreAndReviewPostLink}"><b>积分系统和社区审核机制的相关说明</b></a> 一文。`,

}

