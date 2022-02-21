class Response
{
	constructor(opts = {}){
		this.obj = {
			ok: false,
			data: null,
			error: '',
		};
		this.added = {};
	}

	ok(bool){
		this.obj.ok = !!bool;
		return this.getObj();
	}

	stringify(data, fullPath = null){
		if(typeof data == 'object' && data != null){

			if(data.toJSON) return data.toJSON();
			if(data.toNumber) return data.toNumber();
			if(data.hasOwnProperty('toString')) return data.toString();

			if(fullPath && fullPath.includes(data)) return Infinity;

			for(let k in data){
				let path = fullPath ? (fullPath.push(data) && fullPath) : [data];
				data[k] = this.stringify(data[k], path);
			}

		}

		return data;
	}

	data(data){
		this.obj.ok = true;
		this.obj.data = this.stringify(data);
		console.log(data);
		return this.getObj();
	}

	error(str){
		this.obj.ok = false;
		this.obj.error = this.stringify(str);
		console.log(str);
		return this.obj;
	}

	set(env, data){
		if(!env) return false;
		this.added[env] = this.stringify(data);
		return this;
	}

	/**
     * @api {get} /* Response
     * @apiName Response
     * @apiGroup Requests
     * @apiDescription Request always has json format
	 *
     * @apiSuccess {Boolean} ok Result of an operation (default: false)
	 * @apiSuccess {Object|String} data Result of an operation (default: null)
	 * @apiSuccess {Object|String} error Some errors (default: "")
     */
	getObj(){
		return Object.keys(this.added).length ? Object.assign(this.obj, this.added) : this.obj;
	}
}

module.exports = Response;
