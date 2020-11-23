import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";

export const BreadcrumbsDetails = ({ types, brand, body }) => {
  const filterLink = [
    { name: "React search car", to: "/:pages/:search/:toggle=all&" },
    { name: types, to: `/:pages/:search/:toggle=all&types=${types}&` },
    {
      name: brand,
      to: `/:pages/:search/:toggle=all&types=${types}&brand=${brand}&`,
    },
    {
      name: body,
      to: `/:pages/:search/:toggle=all&types=${types}&brand=${brand}&body=${body}&`,
    },
  ];

  return (
    <Breadcrumbs
      color="primary"
      separator="›"
      aria-label="breadcrumb"
      className="mb-auto mt-auto ml-3"
    >
      {filterLink.map(({ name, to }) =>
        name ? (
          <Link key={to} component={NavLink} to={to}>
            {name}
          </Link>
        ) : (
          <Skeleton variant="text" key={to} width={"5rem"} />
        )
      )}
    </Breadcrumbs>
  );
};
