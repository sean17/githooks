module.exports = 
{
	double: function(req, next)
	{
		next(req*2);
	}
};