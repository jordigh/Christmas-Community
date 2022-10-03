module.exports.momentLocale = 'en'

module.exports.strings = {
  _NOT_LOCALIZED: key => `${key} hasn't been translated to English yet.`,
  ADMIN_CLEAR_WISHLISTS_BUTTON: 'Clear all wishlists',
  ADMIN_CLEAR_WISHLISTS_DESCRIPTION: 'This will instantly <b>irreversibly delete all wishlists!</b> Consider making a backup of the database before using this.',
  ADMIN_CLEAR_WISHLISTS_HEADER: 'Wishlist Deletion',
  ADMIN_SETTINGS_CLEARDB_BUTTON: 'Clear Wishlists',
  ADMIN_SETTINGS_CLEARDB_DESCRIPTION: '<b>Warning</b>: These options <b>destroy data</b>! You may want to back up the database before using these options.',
  ADMIN_SETTINGS_CLEARDB_HEADER: 'Data Destruction',
  ADMIN_SETTINGS_CLEARDB_SUCCESS: 'Cleared all wishlists.',
  ADMIN_SETTINGS_HEADER: 'Admin Settings',
  ADMIN_SETTINGS_USERS_ADD_BUTTON: 'Add User',
  ADMIN_SETTINGS_USERS_ADD_HEADER: 'Add user',
  ADMIN_SETTINGS_USERS_ADD_PLACEHOLDER: 'john',
  ADMIN_SETTINGS_USERS_ADD_USERNAME: 'Username',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_FAIL_ADMIN: 'Failed to remove: user is admin.',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_SUCCESS: name => `Successfully removed user ${name}`,
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_NOT_ADMIN: 'user is not an admin',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SELF: 'You cannot demote yourself.',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SUCCESS: name => `${name} is no longer an admin.`,
  ADMIN_SETTINGS_USERS_EDIT_IMPERSONATE_SUCCESS: name => `You are now ${name}.`,
  ADMIN_SETTINGS_USERS_EDIT_NO_USERNAME_PROVIDED: 'No username provided',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_ALREADY_ADMIN: 'user is already admin',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_DEMOTE_NOT_FOUND: 'User not found.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_SUCCESS: name => `${name} is now an admin.`,
  ADMIN_SETTINGS_USERS_EDIT_RENAMED_USER: 'Renamed user!',
  ADMIN_SETTINGS_USERS_EDIT_SAME_NAME: 'Username is same as new username.',
  ADMIN_SETTINGS_USERS_EDIT: 'Edit',
  ADMIN_SETTINGS_USERS_HEADER: 'Users',
  ADMIN_SETTINGS_VERSION_INFO: 'Version Info',
  ADMIN_USER_EDIT_ACCOUNT_UNCONFIRMED: "This account hasn't been confirmed.",
  ADMIN_USER_EDIT_ADMIN_ISADMIN: name => `${name} is an admin.`,
  ADMIN_USER_EDIT_ADMIN_NOTADMIN: name => `${name} is not an admin.`,
  ADMIN_USER_EDIT_ADMIN: 'Admin',
  ADMIN_USER_EDIT_CHANGE_NAME: 'Change Name',
  ADMIN_USER_EDIT_CHANGE_USERNAME: 'Change Username',
  ADMIN_USER_EDIT_CONFIRMATION_LINK: 'Confirmation Link',
  ADMIN_USER_EDIT_DELETE_ADMIN: 'User is admin',
  ADMIN_USER_EDIT_DELETE_HEADER: 'Irreversible Deletion',
  ADMIN_USER_EDIT_DELETE_USER: name => `Remove user ${name}`,
  ADMIN_USER_EDIT_DEMOTE_SELF: 'You cannot demote yourself',
  ADMIN_USER_EDIT_DEMOTE: name => `Demote ${name}`,
  ADMIN_USER_EDIT_EDITING_USER: name => `Editing user "${name}"`,
  ADMIN_USER_EDIT_GENERATE_NEW_LINK: 'Generate New Link',
  ADMIN_USER_EDIT_IMPERSONATE_BUTTON: name => `Log in as ${name}`,
  ADMIN_USER_EDIT_IMPERSONATE_HEADER: 'Impersonate',
  ADMIN_USER_EDIT_LINK_EXPIRY_FUTURE: fromNow => `The following link expires ${fromNow}`, // fromNow is localized by moment
  ADMIN_USER_EDIT_LINK_EXPIRY_PAST: fromNow => `The following link expired ${fromNow}`,
  ADMIN_USER_EDIT_PROMOTE: name => `Promote ${name}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_FUTURE: fromNow => `It expires ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_PAST: fromNow => `It expired ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK: 'There is a reset password link for this user.',
  ADMIN_USER_EDIT_RESET_PASSWORD_HEADER: 'Reset Password',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CANCEL: 'Cancel Password Reset Link',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CREATE: 'Create Password Reset Link',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_REFRESH: 'Refresh Password Reset Link',
  ADMIN_USER_EDIT_USERNAME: 'Username',
  BACK_BUTTON: 'Back',
  CONFIRM_ACCOUNT_EXPIRED: 'Your confirmation link has expired. Please ask for a new one.',
  CONFIRM_ACCOUNT_HEADER_INVALID: `${_CC.config.siteTitle} | Confirmation Link Invalid`,
  CONFIRM_ACCOUNT_HEADER_VALID: `${_CC.config.siteTitle} | Confirm Account`,
  CONFIRM_ACCOUNT_INVALID: "This confirmation link isn't valid, perhaps the account was deleted or some characters at the end got cut off?",
  CONFIRM_ACCOUNT_SET_PW_BUTTON: `Join ${_CC.config.siteTitle}`,
  CONFIRM_ACCOUNT_SET_PW_PLACEHOLDER: 'pa$$word!',
  CONFIRM_ACCOUNT_SET_PW_TEXT: name => `Hello ${name}! Please set your password here.`,
  CONFIRM_ACCOUNT_SUCCESS: `Welcome to ${_CC.config.siteTitle}!`,
  LOGIN_BUTTON: 'Log In',
  LOGIN_PASSWORD_PLACEHOLDER: 'pa$$word!',
  LOGIN_PASSWORD: 'Password',
  LOGIN_USERNAME_PLACEHOLDER: 'john',
  LOGIN_USERNAME: 'Username',
  LOGOUT_BUTTON: 'Log Out',
  NAVBAR_ADMIN: 'Admin Settings',
  NAVBAR_LOGIN: 'Log In',
  NAVBAR_LOGOUT: 'Log Out',
  NAVBAR_PROFILE: 'Profile',
  NAVBAR_WISHLIST: 'My Wishlist',
  NOTE_BACK: name => `Back to ${name}'s wishlist`,
  NOTE_GET_PRODUCT_DATA: 'Get Product Data',
  NOTE_GUARD: 'Invalid user',
  NOTE_IMAGE_URL: 'Image URL',
  NOTE_MISSING_PROP: prop => `Missing property ${prop}`, // not really possible to localize this unfortunately
  NOTE_NAME: 'Name',
  NOTE_NOTE: 'Note',
  NOTE_PRICE: 'Price',
  NOTE_REFRESH_DATA: 'Refresh Data',
  NOTE_REMOVE_GUARD: 'Invalid user',
  NOTE_REMOVE_MISSING: 'Has no note',
  NOTE_REMOVE_SUCCESS: 'Successfully removed note',
  NOTE_SAVE_BUTTON: 'Save Item',
  NOTE_SUCCESS: 'Successfully saved!',
  NOTE_URL: 'URL',
  PROFILE_HEADER: 'Profile',
  PROFILE_PASSWORD_BUTTON: 'Save',
  PROFILE_PASSWORD_NEW: 'New Password',
  PROFILE_PASSWORD_OLD_MISMATCH: 'Incorrect old password',
  PROFILE_PASSWORD_OLD: 'Old Password',
  PROFILE_PASSWORD_PLACEHOLDER: 'pa$$word!',
  PROFILE_PASSWORD_REQUIRED_NEW: 'New Password is required',
  PROFILE_PASSWORD_REQUIRED_OLD: 'Old Password is required',
  PROFILE_PASSWORD_SUCCESS: 'Changed saved successfully!',
  PROFILE_PASSWORD_TITLE: name => `Profile Settings - Password - ${name}`,
  PROFILE_PFP_IMAGE_URL: 'Image URL',
  PROFILE_SAVE_PFP_DISABLED: 'Profile pictures are disabled.',
  PROFILE_SAVE_PFP_SUCCESS: 'Saved profile picture!',
  PROFILE_SECURITY_CHANGE_PASSWORD: 'Change Password',
  PROFILE_SECURITY: 'Security',
  PROFILE_TITLE: name => `Profile Settings - ${name}`,
  RESET_PASSWORD_BUTTON: 'Reset Password',
  RESET_PASSWORD_GREETING_EXPIRED: 'Your reset link has expired. Please ask for a new one.',
  RESET_PASSWORD_GREETING_INVALID: "This reset link isn't valid, perhaps the link was canceled or some characters at the end got cut off?",
  RESET_PASSWORD_GREETING_VALID: name => `Hello ${name}! Please set your password here.`,
  RESET_PASSWORD_HEADER_INVALID: `${_CC.config.siteTitle} | Reset Link Invalid`,
  RESET_PASSWORD_HEADER_VALID: `${_CC.config.siteTitle} | Reset Password`,
  RESET_PASSWORD_PASSWORD_PLACEHOLDER: 'pa$$word!',
  RESET_PASSWORD_PASSWORD: 'Password',
  RESET_PASSWORD_SUCCESS: 'Password reset successfully!',
  SETUP_ADMIN_USER: 'Admin User',
  SETUP_BUTTON: 'Set up!',
  SETUP_HEADER: 'Setup',
  SETUP_PASSWORD_PLACEHOLDER: 'pa$$word!',
  SETUP_PASSWORD: 'Password',
  SETUP_USERNAME_PLACEHOLDER: 'john',
  SETUP_USERNAME: 'Username',
  SUPPORTED_SITES_HEADER: 'Supported Sites',
  SUPPORTED_SITES_TEXT: 'Is a site missing or broken? Open an issue <a href="https://gitlab.com/wingysam/get-product-name/-/issues/new">here</a>! :)',
  UPDATE_NOTICE: (current, latest) => `
    <span class="has-text-danger is-size-4 has-text-weight-bold">
      Christmas Community is out of date. There may be new features or bug fixes. Consider updating! :)
    </span>
    <br>
    <span>(you can turn this off with <code>UPDATE_CHECK=false</code>)</span>
    <br><br>
    <span>Current: ${current}</span>
    <br>
    <span>Latest: ${latest}</span>
    <span class="has-text-info" style="float: right;">This message is only visible to admins</span>`,
  WISHLIST_ADD: 'Add item to wishlist',
  WISHLIST_ADDED_BY_USER: addedBy => `Added by: ${addedBy}`,
  WISHLIST_ADDED_BY: 'Added By',
  WISHLIST_CONFLICT: 'Items are being added too quickly. Please try again.',
  WISHLIST_DELETE: 'Delete',
  WISHLIST_EDIT_ITEM: 'Edit Item',
  WISHLIST_IMAGE: 'Image',
  WISHLIST_MOVE_DOWN: 'Move Down',
  WISHLIST_MOVE_GUARD: 'Not correct user',
  WISHLIST_MOVE_INVALID: 'Invalid move',
  WISHLIST_MOVE_ITEM_DOWN: 'Move Item Down',
  WISHLIST_MOVE_ITEM_TOP: 'Move Item Top',
  WISHLIST_MOVE_ITEM_UP: 'Move Item Up',
  WISHLIST_MOVE_SUCCESS: 'Successfully moved item!',
  WISHLIST_MOVE_TOP: 'Move Top',
  WISHLIST_MOVE_UP: 'Move Up',
  WISHLIST_NAME: 'Name',
  WISHLIST_NOTE: 'Note',
  WISHLIST_OPTIONAL: 'Optional',
  WISHLIST_PLEDGE_DUPLICATE: 'Item already pledged for',
  WISHLIST_PLEDGE_ITEM: 'Pledge item',
  WISHLIST_PLEDGE_SUCCESS: 'Successfully pledged for item!',
  WISHLIST_PLEDGE: 'Pledge',
  WISHLIST_PLEDGED: pledgedBy => `Pledged for by ${pledgedBy}`,
  WISHLIST_PLEDGED_GUEST: 'Pledged for by a guest user',
  WISHLIST_PRICE: 'Price',
  WISHLIST_REFRESH_GUARD: 'Invalid user',
  WISHLIST_REFRESH_NO_URL: 'Item has no URL.',
  WISHLIST_REFRESH_SUCCESS: 'Successfully refreshed data!',
  WISHLIST_REMOVE_GUARD: 'Not correct user',
  WISHLIST_REMOVE_MISSING: 'Failed to find item',
  WISHLIST_REMOVE_SUCCESS: 'Successfully removed from wishlist',
  WISHLIST_SUGGEST: 'Suggest item',
  WISHLIST_TITLE: name => `${_CC.config.siteTitle} - Wishlist - ${name}`,
  WISHLIST_UNPLEDGE_GUARD: 'You did not pledge for this', // should never happen unless someone makes their own http requests
  WISHLIST_UNPLEDGE_MISSING: 'Failed to find item',
  WISHLIST_UNPLEDGE_SUCCESS: 'Successfully unpledged for item!',
  WISHLIST_UNPLEDGE: 'Unpledge',
  WISHLIST_URL_LABEL: 'Item URL or Name (<a href="/supported-sites">Supported Sites</a>)',
  WISHLIST_URL_PLACEHOLDER: 'https://www.amazon.com/dp/B00ZV9RDKK',
  WISHLIST_URL_REQUIRED: 'Item URL or Name is required',
  WISHLISTS_COUNTS_SELF: name => `${name}: ???/???`,
  WISHLISTS_COUNTS: (name, pledged, total) => `${name}: ${pledged}/${total}`,
  WISHLISTS_TITLE: `${_CC.config.siteTitle} - Wishlists`
}
