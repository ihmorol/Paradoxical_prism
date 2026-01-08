import { Router } from 'express';
import { ArtworkRoutes } from '../modules/artwork/artwork.route';
import { DecodeRoutes } from '../modules/decode/decode.route';
import { ReportRoutes } from '../modules/report/report.route';
import { ReviewerRoutes } from '../modules/reviewer/reviewer.route';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/artworks',
    route: ArtworkRoutes,
  },
  {
    path: '/decodes',
    route: DecodeRoutes,
  },
  {
    path: '/reports',
    route: ReportRoutes,
  },
  {
    path: '/reviewers',
    route: ReviewerRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
