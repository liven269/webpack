/**
 * Created by liwen on 2018/9/10
 */

import Mock from 'mockjs';
import {menuTree} from "./auth";

Mock.mock('http://localhost:8080/api/portal/v1/basic/menus?appId=testId', 'get', menuTree);