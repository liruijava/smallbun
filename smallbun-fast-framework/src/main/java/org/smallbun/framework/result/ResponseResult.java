package org.smallbun.framework.result;

import java.util.List;

import com.baomidou.mybatisplus.core.metadata.IPage;


public class ResponseResult<T>{
	private Integer status = 200;
	private String message;	
	private List<T> data;
	private Long total;
	
	public ResponseResult() {
		super();
	}
	
	public ResponseResult(IPage<T> page) {
		if(page != null) {
			this.data = page.getRecords();
		}
		if(page != null) {
			this.total = page.getTotal();
		}
		
	}

	public Long getTotal() {
		return total;
	}

	public void setTotal(Long total) {
		this.total = total;
	}

	public ResponseResult(Integer status, Exception ex) {
		super();
		this.status = status;
		this.message = ex.getMessage();
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status= status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}



		
		
}
