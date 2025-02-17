function skillsMember(member) {
    return {
        restrict: 'E',
        templateUrl: 'partials/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindingToController: true,
        scope: {
            member: '='
        }
    };
}
