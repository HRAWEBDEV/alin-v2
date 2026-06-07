export function createMenuLink({
 departmentRouteMap,
 menuLink,
 programID,
 programRouteMap,
}: {
 departmentRouteMap: string;
 programRouteMap: string;
 programID: number;
 menuLink: string;
}) {
 return `/${departmentRouteMap}/${programID.toString()}/${programRouteMap}/${menuLink}` as '/fa';
}
