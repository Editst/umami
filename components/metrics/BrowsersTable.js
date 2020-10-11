import React from 'react';
import { FormattedMessage } from 'react-intl';
import MetricsTable from './MetricsTable';
import { browserFilter } from 'lib/filters';

export default function BrowsersTable({ websiteId, token, ...props }) {
  return (
    <MetricsTable
      {...props}
      title={<FormattedMessage id="metrics.browsers" defaultMessage="Browsers" />}
      type="browser"
      metric={<FormattedMessage id="metrics.visitors" defaultMessage="Visitors" />}
      websiteId={websiteId}
      token={token}
      dataFilter={browserFilter}
    />
  );
}
