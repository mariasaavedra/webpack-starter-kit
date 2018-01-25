export default function DashboardController($timeout, $q) {
    var vm = this;
    vm.tags = ['art','technology', 'fashion'];
    vm.readonly = false;
    vm.removable = true;
}