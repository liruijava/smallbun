(function(a){function b(d){var c=a.data(d,"datetimespinner").options;a(d).addClass("datetimespinner-f").timespinner(c)}a.fn.datetimespinner=function(e,d){if(typeof e=="string"){var c=a.fn.datetimespinner.methods[e];if(c){return c(this,d)}else{return this.timespinner(e,d)}}e=e||{};return this.each(function(){var f=a.data(this,"datetimespinner");if(f){a.extend(f.options,e)}else{a.data(this,"datetimespinner",{options:a.extend({},a.fn.datetimespinner.defaults,a.fn.datetimespinner.parseOptions(this),e)})}b(this)})};a.fn.datetimespinner.methods={options:function(d){var c=d.timespinner("options");return a.extend(a.data(d[0],"datetimespinner").options,{width:c.width,value:c.value,originalValue:c.originalValue,disabled:c.disabled,readonly:c.readonly})}};a.fn.datetimespinner.parseOptions=function(c){return a.extend({},a.fn.timespinner.parseOptions(c),a.parser.parseOptions(c,[]))};a.fn.datetimespinner.defaults=a.extend({},a.fn.timespinner.defaults,{formatter:function(c){if(!c){return""}return a.fn.datebox.defaults.formatter.call(this,c)+" "+a.fn.timespinner.defaults.formatter.call(this,c)},parser:function(e){e=a.trim(e);if(!e){return null}var f=e.split(" ");var d=a.fn.datebox.defaults.parser.call(this,f[0]);if(f.length<2){return d}var c=a.fn.timespinner.defaults.parser.call(this,f[1]);return new Date(d.getFullYear(),d.getMonth(),d.getDate(),c.getHours(),c.getMinutes(),c.getSeconds())},selections:[[0,2],[3,5],[6,10],[11,13],[14,16],[17,19]]})})(jQuery);