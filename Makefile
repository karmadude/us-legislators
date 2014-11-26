YAML_DIR = bower_components/congress-legislators
JSON_FILES := $(patsubst $(YAML_DIR)/%.yaml,data/%.json,$(wildcard $(YAML_DIR)/*.yaml))

all: clean $(JSON_FILES) committees.json
	@echo "------------------"
	@echo "done"

clean:
	@echo "clean"
	@rm -rf data/*.json

.PHONY: clean update all
	
data/%.json: $(YAML_DIR)/%.yaml
	@echo "------------------"
	@echo $<
	@echo $@
	@ruby -ryaml -rjson -e 'puts JSON.pretty_generate(YAML.load(ARGF))' < $< > $@

committees.json: data/committees-current.json
	@echo "------------------"
	@echo $<
	@echo $@
	@cp $< $@