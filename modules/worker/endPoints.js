const userEndPoints = Object.freeze({
  USER_ADD_ADMIN: 'user:addAdmin',
  USER_ADD_OPERATOR: 'user:addOperator',
  USER_ADD_VENDOR: 'user:addVendor',
  USER_UPDATE_USER: 'user:updateUser',
  USER_ADD_CUSTOMER: 'user:addCustomer',
  USER_ACTIVATE_USER: 'user:activateUser',
  USER_DELETE_USER: 'user:deleteUser',
  USER_GET_ADMINS: 'user:getAdmins',
  USER_GET_OPERATORS: 'user:getOperators',
  USER_GET_CUSTOMERS: 'user:getCustomers',
  USER_GET_VENDORS: 'user:getVendors',
  USER_RESET_USER_PASSWORD: 'user:resetUserPassword',
  USER_GET_USERS: 'user:getUsers',
  USER_GET_USER: 'user:getUser',
  USER_CUSTOMER_ADD_ADDRESS: 'user:customerAddAddress',
  USER_ADMIN_COUNT_CUSTOMERS: 'user:adminCountCustomers',
  USER_UPDATE_VENDOR: 'user:updateVendor',
  USER_ADMIN_LOG_IN_AS_VENDOR: 'user:adminLoginAsVendor',
  USER_CUSTOMER_UPDATE_PROFILE: 'user:customerUpdateProfile'
});

module.exports = userEndPoints;
