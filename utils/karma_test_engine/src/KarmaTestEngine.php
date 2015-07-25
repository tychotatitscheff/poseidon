<?php

/**
 * Karma wrapper.
 */
final class KarmaTestEngine extends ArcanistUnitTestEngine {

  protected function supportsRunAllTests() {
    // In fact, this is the only mode that `karma` supports.
    return true;
  }

  public function run() {
    $working_copy = $this->getWorkingCopy();
    $project_root = $working_copy->getProjectRoot();
    $config_manager = $this->getConfigurationManager();

    $config   = $config_manager->getConfigFromAnySource('unit.karma.config');
    $junit    = $config_manager->getConfigFromAnySource('unit.karma.junit');
    $coverage = $config_manager->getConfigFromAnySource('unit.karma.coverage');

    if (!$config) {
      throw new ArcanistUsageException(
        'No configuration is configured. Set `unit.karma.config` '.
        'in your `.arcconfig` file.');
    }

    if (!$junit) {
      throw new ArcanistUsageException(
        'No JUnit output file is configured. Set `unit.karma.junit` '.
        'in your `.arcconfig` file.');
    }

    if ($this->getEnableCoverage() && !$coverage) {
      throw new ArcanistUsageException(
        'No coverage output file is configured. Set `unit.karma.coverage` '.
        'in your `.arcconfig` file.');
    }

    $future = $this->buildTestFuture($config);
    $future->resolvex();

    return $this->parseTestResults($junit, $coverage);
  }

  private function buildTestFuture($config) {
    $flags = array(
      '--log-level=info',
      '--no-colors',
      '--single-run'
    );

    $reporters = array();
    $reporters[] = 'junit';

    if ($this->getEnableCoverage()) {
      $reporters[] = 'coverage';
    }
    $flags[] = '--reporters='.implode(',', $reporters);

    $future = id(new ExecFuture('CONTINUOUS_INTEGRATION=true PHANTOMJS=true karma start %Ls %s', $flags, $config))
      ->setCWD($this->getWorkingCopy()->getProjectRoot());
    return $future;
  }

  private function parseTestResults($junit) {
    $parser = new ArcanistXUnitTestResultParser();
    return $parser->parseTestResults(Filesystem::readFile($junit));
  }

}
