/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 ‭‭‭‭‭‭‭‭‭‭‭‭[smallbun] www.smallbun.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

package org.smallbun.fast.manage.menu.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.smallbun.fast.manage.menu.entity.SysMenuEntity;
import org.smallbun.framework.base.BaseMapper;
import java.io.Serializable;
import java.util.List;

/**
 * 系统菜单
 *
 * @author SanLi
 * Created by 2689170096@qq.com/SanLi on 2018/4/30
 */
@Mapper
public interface SysMenuMapper extends BaseMapper<SysMenuEntity> {
	/**
	 * 根据用户ID进行查询所具有的菜单功能权限
	 *
	 * @param userId {@link Long} 用户ID
	 * @return {@link SysMenuEntity}
	 */
	@Select("select distinct p.* from sys_menu p inner join sys_role_menu rp on p.id = rp.menu_id inner join sys_user_role ru on ru.role_id = rp.role_id where ru.user_id = #{userId} and p.is_deleted=0 and p.menu_status=0 order by p.sort")
	List<SysMenuEntity> findByUserId(@Param("userId") Serializable userId);

	/**
	 * 根据角色ID进行查询所具有的菜单功能权限
	 *
	 * @param roleId {@link Long} 角色ID
	 * @return {@link SysMenuEntity}
	 */
	List<SysMenuEntity> findByRoleId(@Param("roleId") Serializable roleId);

}
